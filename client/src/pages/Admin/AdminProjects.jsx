
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/routeSlice';
import axios from 'axios';
import { Modal, Form, message,} from 'antd';

function AdminProjects() {

    const dispatch = useDispatch();
    const { portfolioData }= useSelector((state)=> state.root);
    const {projects} = portfolioData;
    const [showAddEditModal,setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit,setSelectedItemForEdit] = React.useState(null);
    const[type,setType] = React.useState('add');

    const onFinish = async(values)=>{
        try{
            dispatch(ShowLoading());
            let response;
            if(selectedItemForEdit){
                response = await axios.post("http://localhost:8000/api/portfolio/update-project",{
                    ...values,
                    _id: selectedItemForEdit._id
                });
            }else{
              response = await axios.post("http://localhost:8000/api/portfolio/add-project",values)
            }
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            }else{
                message.error(response.data.message);
            }
        }
        catch(error){
           dispatch(HideLoading());
           message.error(error.message);
        }
    };

    const onDelete = async (item)=>{
        try{
            dispatch(ShowLoading());
             const  response= await axios.post("http://localhost:8000/api/portfolio/delete-project",{
                    _id: item._id
                });
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            }else{
                message.error(response.data.message);
            }
        }
        catch(error){
           dispatch(HideLoading());
           message.error(error.message);
        }
    };
  return (
    <div>
        <div className='flex justify-end'>
            <button className=' bg-primary px-5 py-2 text-white' onClick={()=>{
                setSelectedItemForEdit(null);
                setShowAddEditModal(true);
            }}>Add Project</button>
        </div> 
        <div className=' grid grid-cols-3 gap-5 sm:grid-cols-1'>
             {
                projects.map((project)=>{
                    return(
                        <div className='shadow border p-5 border-gray-400 flex flex-col gap-5'>
                         <h1 className=' text-primary text-xl font-bold'>{project.title}</h1>
                         <hr />
                         <img src={project.image} alt="" className=' h-60 w-80' />
                         <h1>{project.description}</h1>

                         <div className=' flex justify-end text-white gap-5'>
                            <button className=' bg-red-600 text-white px-5 py-2 ' onClick={()=>{
                                onDelete(project)
                            }}>Delete</button>

                            <button className=' bg-black text-white px-5 py-2 ' onClick={()=>{
                                setSelectedItemForEdit(project);
                                setShowAddEditModal(true)
                                setType('edit');
                            }}>Edit</button>
                         </div>
                        </div>
                    )
                })
             }
        </div>
        {
            (type === 'add' || selectedItemForEdit) && (
                <Modal 
                visible = {showAddEditModal}
                title= { selectedItemForEdit ? "Edit Project" : "Add project"}
                footer = {null}
                onCancel={()=>{
                    setShowAddEditModal(false);
                    setSelectedItemForEdit(null);
                }}>
                    <Form layout='vertical'
                    onFinish={onFinish}
                    initialValues={selectedItemForEdit || {}}>

                        <Form.Item name='title' label='title'>
                            <input placeholder='title' />
                        </Form.Item>
                      
                        <Form.Item name='image' label='image'>
                            <input placeholder='image' />
                        </Form.Item>

                        <Form.Item name='description' label='description'>
                            <input placeholder='description' />
                        </Form.Item>

                        <Form.Item name='link' label='link'>
                            <input placeholder='link' />
                        </Form.Item>

                        <div className='flex justify-end'>
                          <button className='border-primary text-primary px-5 py-2' onClick={()=>{
                            setShowAddEditModal(false);
                            setSelectedItemForEdit(null)
                          }}>Cancel</button>

                          <button className='bg-primary text-white px-5 py-2'>
                            {selectedItemForEdit ? 'Update': 'Add'}
                          </button>
                        </div>
                    </Form>

                </Modal>
            )
        }

    </div>
  )
}

export default AdminProjects;