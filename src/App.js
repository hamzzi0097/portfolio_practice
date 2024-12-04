import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>김태현의 포트폴리오</h1>
        <p className="intro">
          프론트엔드 개발자 | React 전문가
        </p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            안녕하세요! 창의적인 웹 솔루션을 만드는 것을 좋아하는 개발자입니다.
          </p>
        </section>

        <section className="projects">
          <h2>프로젝트</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>유니디 (유니버셜 디자인)</h3>
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
              <h3>UOOM</h3>
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

        <section className="skills">
          <h2>기술 스택</h2>
          <div className="skills-container">
            {/* 기술 스택 아이콘이나 리스트가 들어갈 예정 */}
          </div>
        </section>
      </main>

      <footer>
        <p>연락처: example@email.com</p>
      </footer>
    </div>
  );
}

export default App;
