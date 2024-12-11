import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import './App.css';
import Navbar from './components/Navbar';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 네비게이션 바 */}
        <Navbar />
        <div className="content" style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={
            <>
              <header className="App-header">
                <h1>김태현의 포트폴리오</h1>
                <p className="intro">
                  유니티 개발자 | Junior Developer
                </p>
              </header>

              <main>
                <section className="about">
                  <h2>About Me</h2>
                  <div className="about-grid">
                  <div className="about-item">
                    <div className="about-label">이름</div>
                    <div className="about-content">김태현</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">생년월일</div>
                    <div className="about-content">2002.09.12</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">연락처</div>
                    <div className="about-content">010-2167-5323</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">이메일</div>
                    <div className="about-content">act0097@gmail.com</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">학력</div>
                    <div className="about-content">인하대학교 컴퓨터공학과</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">깃허브</div>
                    <div className="about-content">
                      <a 
                       href="https://github.com/hamzzi0097" 
                        target="_blank" 
                        rel="noopener noreferrer"
                       className="github-link"
                      >
                       <FaGithub className="github-icon" />
                       github.com/hamzzi0097
                      </a>
                    </div>
                  </div>
                  </div>
                </section>
                
                <section className="skills">
                  <h2>기술 스택</h2>
                  <div className="skills-container">
                    {/* 기술 스택 아이콘이나 리스트가 들어갈 예정 */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </section>

                <section className="projects">
                  <h2>프로젝트</h2>
                  <div className="project-grid">
                    <div className="project-card">
                      <Link to="/project/unidD">
                        <h3>유니디 (유니버셜 디자인)</h3>
                      </Link>
                      <p>시각장애인의 시점을 체험해볼 수 있는 게임</p>
                      <div className="project-tech">
                        <span>Unity</span>
                        <span>VCC</span>
                      </div>
                      <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">데모 보기</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                      </div>
                    </div>

                    <div className="project-card">
                      <Link to="/project/uoom">
                        <h3>UOOM</h3>
                      </Link>
                      <p>자신의 개성을 표현할 수 있는 아트워크 기반 커뮤니티 플랫폼</p>
                      <div className="project-tech">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                      </div>
                      <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">데모 보기</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>

        <footer>
          <p>연락처: act0097@gmail.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
