import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  // 프로젝트 데이터 (실제로는 별도의 데이터 파일이나 API로 관리하는 것을 추천)
  const projects = {
    unidD: {
      title: "유니디 (유니버셜 디자인)",
      description: "시각장애인의 시점을 체험해볼 수 있는 게임",
      fullDescription: `
        • 프로젝트 목적: 시각장애인에 대한 이해도를 높이기 위한 VR 게임
        • 주요 기능: 
          - 소리를 통한 방향 감지
          - 햅틱 피드백을 통한 상호작용
          - 다양한 시나리오 체험
        • 사용 기술: Unity, VCC
        • 담당 역할: 게임 로직 개발, UI/UX 설계
      `,
      techStack: ["Unity", "VCC"],
      images: ["이미지URL1", "이미지URL2"],
      github: "https://github.com/hamzzi0097",
      demo: "데모 링크"
    },
    uoom: {
      title: "UOOM",
      description: "아트워크 기반 커뮤니티 플랫폼",
      fullDescription: `
        • 프로젝트 목적: 아티스트들의 작품 공유 및 소통 플랫폼
        • 주요 기능:
          - 작품 업로드 및 공유
          - 실시간 피드백
          - 포트폴리오 생성
        • 사용 기술: React, Node.js, MongoDB
        • 담당 역할: 프론트엔드 개발, API 설계
      `,
      techStack: ["React", "Node.js", "MongoDB"],
      images: ["이미지URL1", "이미지URL2"],
      github: "https://github.com/hamzzi0097",
      demo: "데모 링크"
    }
  };

  const project = projects[id];

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← 돌아가기</Link>
      <h1>{project.title}</h1>
      <p className="project-overview">{project.description}</p>
      
      <div className="project-content">
        <pre className="project-full-description">
          {project.fullDescription}
        </pre>
        
        <div className="project-tech-stack">
          <h3>사용 기술</h3>
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">
            데모 사이트
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;