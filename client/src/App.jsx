
import './App.css'
import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import {Routes, Route} from 'react-router-dom';
import Courses from './pages/Courses';
import MyLearning from './pages/myLearning';
import Assessments from './pages/Assessment';
import Progress from './pages/Progress';
import CreateCourse from './pages/CreateCourse';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Leaderboard from './pages/Leaderboard';
import Bookmarks from './pages/Bookmarks';
import Certification from './pages/Certification';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Incident from './pages/Incident';
import Immersive from './pages/Immersive';
import CourseId from './pages/CourseId';
import TrainingManagement from './pages/TrainingManagement';
function App() {


  return (

    <div className='h-screen flex flex-col'>
      <Header/>
      <div className='flex flex-1 overflow-hidden'>
      <Navbar/>
      <main className='flex-1 overflow-y-auto bg-gray-50 p-6'>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/my-learning' element={<MyLearning />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/assessments' element={<Assessments />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/immersive' element={<Immersive />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-course' element={<CreateCourse />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/incident' element={<Incident />} />
          <Route path='courseId' element={<CourseId/>}/>
          <Route path='/community' element={<Community />} /> 
          <Route path='/leaderboard' element={<Leaderboard />} /> 
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/certification' element={<Certification />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/training' element={<TrainingManagement/>}/>                
        
      </Routes>
      </main>
      </div>
    </div>
  )
}

export default App
