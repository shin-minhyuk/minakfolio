import { IconType } from '@/components/Projects/Icon';

export type ProjectKeys = 'vita' | 'micgolf' | 'minflix' | 'minhyukfolio';
export type Feature = {
  title: string;
  description: string[];
};

export type ProjectData = {
  title: string;
  description: string;
  duration: string;
  techStack: IconType[];
  image: string;
  github: string;
  link: string;
  teamSize: string;
  role: string;
  features: Feature[];
  expreience: string[];
  keyPoint: string[];
  backgroundImages: string[];
};

export type Projects = Record<ProjectKeys, ProjectData>;

export const projectDatas: Projects = {
  vita: {
    title: 'VITA',
    description: '실시간 소통이 가능한 게임메이트 매칭 서비스',
    duration: '2024. 10.10 - 2024. 11. 06',
    techStack: ['Vite', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_vita.jpg',
    github: 'https://github.com/oz-main-project-team-02/vita-gamemate-fe',
    link: 'https://vita.jangsalicense.com/',
    teamSize: '팀 프로젝트',
    role: '개발 팀장, 프론트엔드 팀장',
    features: [
      {
        title: '프로젝트 초기 설정 및 구조 설계',
        description: [
          '코드 품질 유지를 위해 eslint와 prettier를 도입 및 적용',
          '협업 효율성을 높이기 위해 Github Pull Request Role 설정 및 Detecting Main Branch 전략을 사용 및 체계적인 일정 관리와 코드 리뷰 진행',
        ],
      },
      {
        title: '로그인 및 회원가입 기능',
        description: [
          'Kakao Developers API를 사용하여 클라이언트에서 인가코드를 처리하여 서버에 전달하는 방식을 채택',
          '비로그인 상태에서 접근할 수 없는 페이지를 방어하는 접근 제어 로직을 추가',
        ],
      },
      {
        title: '실시간 게임 메이트 매칭 기능',
        description: [
          'WebSocket 프로토콜을 사용하여 실시간 사용자 상태(온라인/오프라인)를 확인할 수 있는 기능 구현',
          '매칭 요청 및 수락 시, 실시간으로 상태가 반영되도록 React 불변성을 유지하며 Tanstack-Query 캐시 데이터 변경하는 기능 구현',
          '의뢰 요청, 수락, 취소, 리뷰 작성 상태의 모든 UI를 일관성있게 구현하여 사용자 경험을 극대화',
        ],
      },
      {
        title: '포스팅 및 리뷰 기능',
        description: [
          '게임 메이트에 대한 리뷰 작성 및 별점 부여 기능 구현',
          '작성된 리뷰는 캐싱 및 페이지네이션을 통해 리뷰 데이터를 효율적으로 관리',
        ],
      },
      {
        title: '사용자 대시보드',
        description: [
          'Tanstack-Query를 사용하여 사용자 정보(코드 잔액, 매칭 이력)를 실시간으로 조회',
          '로그인한 사용자만 접근할 수 있는 코인 충전, 매칭 요청 내역 확인 등 대시보드 기능을 조건부로 구현',
        ],
      },
      {
        title: '코인 충전 및 사용',
        description: [
          '토스페이먼츠 테스트 결제 프로세스를 구현하여 사용자에게 코인 충전 기능 제공',
          '충전된 코인을 기반으로 게임 메이트 요청 및 취소 시 잔액이 실시간으로 업데이트되도록 기능 구현',
          '코인 충전 이력을 한눈에 확인할 수 있는 결제내역 대시보드 UI 제공',
        ],
      },
    ],
    expreience: [
      '팀 프로젝트에서 개발팀과 협력하며 프로젝트 초기 설정과 폴더 구조 설계를 주도',
      'Tanstack Query의 데이터 캐싱과 React 상태 관리를 결합하여 실시간 사용자 상태 반영 최적화',
      'WebSocket 프로토콜을 활용해 실시간 게임 메이트 매칭 및 상태 동기화 구현',
      'OAuth 2.0 인증 플로우 설계와 구현을 통해 Kakao API를 활용한 로그인 및 회원가입 기능 완성',
      '토스페이먼츠 결제 API를 연동하여 테스트 결제를 통해 코인 충전 기능 제공, 코인 사용 및 잔액 관리 구현',
    ],
    keyPoint: [
      '강점: 실시간 사용자 상태와 게임 메이트 매칭을 중심으로 한 실시간 경험 제공에 중점',
      '기술적 도전: Tanstack Query 캐싱 데이터를 WebSocket 이벤트와 동기화하여 성능과 데이터 일관성을 유지',
      '성과: VITA는 실시간 통신, OAuth 인증, 결제 시스템을 통합하여 완성도 높은 서비스를 구현',
    ],
    backgroundImages: [
      '/imgs/project_vita.jpg',
      '/imgs/project_vita.jpg',
      '/imgs/project_vita.jpg',
      '/imgs/project_vita.jpg',
      '/imgs/project_vita.jpg',
    ],
  },
  micgolf: {
    title: 'MIC GOLF',
    description: '파파타랩스 기업협업 자사몰 서비스 유저, 어드민 기획 및 제작',
    duration: '2024. 11.07 - 2024. 12. 11',
    techStack: ['Vite', 'Typescript', 'React', 'Tailwind', 'Zustand', 'Axios', 'Tanstack-query'],
    image: '/imgs/project_micgolf.jpg',
    github: 'https://github.com/MICGolf/frontend',
    link: 'https://micgolf.kro.kr/',
    teamSize: '팀 프로젝트',
    role: '개발 팀장, 프론트엔드 팀장',
    features: [
      {
        title: '프로젝트 초기 설정 및 구조 설계',
        description: [
          '코드 품질 유지를 위해 eslint와 prettier를 도입 및 적용',
          '협업 효율성을 높이기 위해 Github Pull Request Role 설정 및 Detecting Main Branch 전략을 사용 및 체계적인 일정 관리와 코드 리뷰 진행',
        ],
      },
      {
        title: '메인 페이지 애니메이션 및 인터렉션 강화',
        description: [
          'Framer-motion을 이용한 랜딩 인트로 추가',
          '메인 페이지에서 인기 상품과 이벤트를 보여주는 반응형 캐러셀 구현',
          '자동 슬라이드 기능과 드래그/스와이프 기능을 추가하여 사용자 경험 향상',
          '메인 페이지 우축 하단 FAB 버튼을 제작하여 사용자가 이전 구경했던 상품 리스트 출력 및 바로가기 기능 구현',
          '첫 페이지 로드 시 이벤트 알림을 위한 팝업 배너 구현, 쿠키를 사용하여 오늘하루 보지않기 기능 구현',
        ],
      },
      {
        title: '장바구니 주요 기능',
        description: [
          '장바구니 기능 구현, Tanstack-Query를 사용해 상품 데이터를 효율적으로 가져오며 비회원에서 로그인 했을 경우 장바구니의 싱크를 맞추는 기능 구현',
          '사용자가 선택한 상품을 로컬스토리지에 저장해 새로고침 후에도 데이텅 유지, 상품의 수량 변경 및 삭제 기능 구현',
        ],
      },
      {
        title: '결제 및 주문 관리',
        description: ['결제 프로세스 구현중 ...'],
      },
      {
        title: '관리자(Admin) 페이지',
        description: ['상품 등록, 수정, 삭제 기능 구현', 'React-Hook-Form을 사용하여 입력 값 검증 및 에러 메시지 출력'],
      },
    ],
    expreience: [
      'React Hook Form과 Tailwind CSS를 활용하여 상품 추가 및 수정 기능의 폼 유효성 검증을 구현',
      'Framer-motion을 사용하여 랜딩 페이지에 애니메이션 효과를 추가하여 사용자 경험을 향상',
      'React-Query를 사용하여 상품 데이터를 효율적으로 관리하고 상태를 동기화하여 사용자 경험을 개선',
      '반응형 디자인으로 모바일과 데스크톱 환경에 적합한 UI를 제공',
      '사용자 경험 향상을 위한 컴포넌트 제작에 집중하여 FAB, 캐러셀, 팝업 배너, Floating Label 제작',
      '추가 기능 구현 중 ...',
    ],
    keyPoint: [
      '강점: 기업 협업에서 요구된 관리 기능(상품, 장바구니, 이벤트)을 유기적으로 통합한 쇼핑몰 플랫폼 개발 경험',
      '기술적 도전: Framer motion, transition 등 화면의 디자인 요소에 집중, React Hook Form의 동적 데이터 처리 및 폼 에러 핸들링 및 관리를 최적화.',
      '성과: 관리자와 일반 사용자 모두에게 일관된 사용자 경험을 제공하며, 기업 요구사항을 충실히 반영한 플랫폼 구현',
    ],
    backgroundImages: [
      '/imgs/project_micgolf.jpg',
      '/imgs/project_micgolf.jpg',
      '/imgs/project_micgolf.jpg',
      '/imgs/project_micgolf.jpg',
      '/imgs/project_micgolf.jpg',
    ],
  },
  minflix: {
    title: 'MIN FLIX',
    description: '실시간 영화 추천, 검색 및 개인화된 즐겨찾기 관리가 가능한 영화 플랫폼',
    duration: '2024. 08.20 - 2024. 08. 27',
    techStack: ['Vite', 'Javascript', 'React', 'Sass', 'Redux', 'Axios', 'Supabase'],
    image: '/imgs/project_minflix.jpg',
    github: 'https://github.com/shin-minhyuk/movie-web',
    link: 'https://minak-movieweb.netlify.app/',
    teamSize: '개인 프로젝트',
    role: '전체 개발 및 설계',
    features: [
      {
        title: '프로젝트 초기 설정 및 구조 설계',
        description: [
          '폴더 구조 설계 및 재사용성을 고려한 컴포넌트 기반 설계',
          'Redux를 활용하여 상태 관리 로직을 중앙 집중화. Redux-Toolkit을 사용하여 코드의 가독성을 높임',
        ],
      },
      {
        title: '로그인 및 사용자 인증',
        description: [
          '카카오 로그인을 활용한 OAuth 인증 기능 구현',
          '로컬 스토리지를 활용해 사용자 세션 관리 및 액세스 토큰 검증 로직 추가',
          '비로그인 상태에서 보호된 페이지 접근을 차단하는 Route Guard 구현',
        ],
      },
      {
        title: '영화 데이터 관리',
        description: [
          '무한 스크롤 구현으로 영화 목록 데이터를 효율적으로 관리',
          '영화 데이터를 Redux 상태로 관리하여 데이터 캐싱과 전역 상태 동기화를 최적화',
        ],
      },
      {
        title: '즐겨찾기 및 사용자 개인화',
        description: ['사용자별 즐겨찾기 데이터를 Supabase와 연동하여 CRUD 기능 구현'],
      },
      {
        title: 'UI/UX',
        description: ['글로벌 로딩 컴포넌트를 도입해 데이터 로딩 상태를 시각적으로 제공'],
      },
      {
        title: '검색 및 필터링',
        description: ['키워드 검색 및 장르별 필터링 기능 구현'],
      },
    ],
    expreience: [
      'Redux와 React-Router의 사용을 통해 상태와 라우팅 관리의 중요성을 학습',
      'Supabase를 활용한 간단한 서버리스 데이터베이스 연동 경험',
      '비동기 요청과 UI 업데이트 사이의 동기화를 최적화하여 사용자 경험(UX)을 개선',
      'OAuth 인증과 로컬 스토리지 기반 세션 관리로 보안성과 로그인 인증 흐름 학습',
    ],
    keyPoint: [
      '강점: 영화 추천, 검색, 즐겨찾기 기능을 중심으로 사용자 개인화에 초점을 맞춘 UI/UX 구현',
      '기술적 도전: Redux와 Supabase를 효과적으로 결합해 데이터 흐름을 최적화',
      '성과: 단일 프로젝트로 React, Redux, 비동기 데이터 관리, 그리고 인증 기술의 통합 구현',
    ],
    backgroundImages: [
      '/imgs/project_minflix.jpg',
      '/imgs/project_minflix.jpg',
      '/imgs/project_minflix.jpg',
      '/imgs/project_minflix.jpg',
      '/imgs/project_minflix.jpg',
    ],
  },
  minhyukfolio: {
    title: 'MINHYUKFOLIO',
    description: '프론트엔드 개발자 포트폴리오 사이트',
    duration: '2024. 11. 22 - ing',
    techStack: ['Next', 'Typescript', 'Tailwind', 'Tanstack-query', 'Supabase'],
    image: '/imgs/thumbnail.jpg',
    github: 'https://github.com/shin-minhyuk/minakfolio',
    link: 'https://minakfolio.vercel.app/',
    teamSize: '개인 프로젝트',
    role: '전체 개발 및 설계',
    features: [
      {
        title: 'Framer Motion을 활용한 랜딩, 인트로 애니메이션',
        description: [
          '페이지 진입 시, 자연스럽게 나타나는 텍스트 페이드 인과 슬라이드 애니메이션을 통해 첫인상에서 사용자의 몰입감을 높였습니다',
          '인트로가 끝난 후 메인 페이지에서 추가적으로 애니메이션이 적용, 세션 기반으로 새로고침 시 반복되지 않도록 구현',
        ],
      },
      {
        title: '스크롤 기반 애니메이션',
        description: [
          '특정 섹션에 접근할 때 시차 효과를 적용하여 동적인 화면 구성을 강화',
          '깔끔하면서도 동적인 인터랙션을 통해 UI의 사용성을 강화',
        ],
      },
      {
        title: '버튼 및 링크 애니메이션',
        description: [
          '마우스 오버 시 버튼이 스케일 업되거나 색상이 변하며 직관적인 피드백 제공',
          '사용자가 선택한 상품을 로컬스토리지에 저장해 새로고침 후에도 데이텅 유지, 상품의 수량 변경 및 삭제 기능 구현',
        ],
      },
      {
        title: 'SEO 최적화',
        description: [
          'Next.js의 내장 기능을 활용하여 SEO를 고려한 메타 태그와 페이지 구조를 설계',
          '각 페이지에 적절한 메타데이터를 추가하여 검색 엔진에서의 가시성을 강화',
        ],
      },
      {
        title: '사용자와의 소통을 위한 이메일 전송 기능 구현 및 실시간 피드백 제공',
        description: [
          'MINHYUKFOLIO 프로젝트에서는 사용자 문의 폼 데이터를 이메일로 전송하는 기능을 구현하여, 방문자가 쉽게 문의 사항을 남기고 소통할 수 있도록 했습니다. 이를 위해 Next.js API Routes를 활용해 백엔드 로직을 작성하고, nodemailer를 사용해 SMTP 서버를 통한 안전한 이메일 전송 프로세스를 구현하였습니다. 또한, 폼 제출 후 성공 및 실패 여부를 사용자에게 즉각적으로 전달하기 위해 Toast UI를 활용한 실시간 피드백 시스템을 추가하였습니다. 전송 중에는 로딩 상태를 Spinner를 통해 시각적으로 제공하여 사용자 경험(UX)을 강화하였고, 전송 성공 시 축하 메시지를, 실패 시 명확한 에러 메시지를 표시하도록 설계하였습니다',
        ],
      },
    ],
    expreience: [],
    keyPoint: [],
    backgroundImages: [
      '/imgs/thumbnail.jpg',
      '/imgs/thumbnail.jpg',
      '/imgs/thumbnail.jpg',
      '/imgs/thumbnail.jpg',
      '/imgs/thumbnail.jpg',
    ],
  },
};
