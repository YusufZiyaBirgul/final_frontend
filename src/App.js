import logo from './logo.svg';
import './App.css';
import { StudentView } from './component/student/api/StudentView';
import { AcademicianView } from './component/academician/view/AcademicianView'
import { AssistantView } from './component/assistant/view/AssistantView';
import ResponsiveAppBar from './component/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LessonView } from './component/lesson/LessonView';
import UpdateStudent from './component/student/addstudent/UpdateStudent';
import { ExamView } from './component/exam/ExamView';
import LoginPage from './component/login/login';
import AddExam from './component/exam/AddExam';
import AddHomework from './component/exam/AddHomework';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveAppBar />} />
          <Route path='/StudentView' element={<StudentView />} />
          <Route path='/AssistantView' element={<AssistantView />} />
          <Route path='/AcademicianView' element={<AcademicianView />} />
          <Route path='/LessonView' element={<LessonView />} />
          <Route path='/edit/:id' element={<UpdateStudent />} />
          <Route path='/ExamView' element={<ExamView />} />
          <Route path='/exam/:lessonId' element={<AddExam />} />
          <Route path='/homeworks/:lessonId' element={<AddHomework />} />

        </Routes>
      </BrowserRouter>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
