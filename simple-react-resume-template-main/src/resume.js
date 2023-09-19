export const header = {
    name: '김재훈',
    desc: '웹 개발자',
    email: 'evolui@naver.com',
    github: 'https://github.com/rlawogns123',
    blog: 'https://velog.io/@rlawogns',
};

export const intro = {
    subject: 'Introduce',
    profile: 'profile.PNG',
    intro: `
    안녕하세요. 웹 개발자 김재훈입니다.

    현대 사회에서 웹만큼 접근하기 쉬운 플랫폼이 없고 모든 기업은 전문 웹 사이트를 가지고 있습니다. 비즈니스에서 웹의 존재는 필수적인 것이 되었기 때문에, 웹 개발자는 어디에서나 필요한 존재가 되었습니다. 더군다나 만드는 사람마다 다양하게 만들 수 있고 사용자에게 편의성을 제공할 수 있습니다. 이런 점이 매력적이게 느껴져서 저는 프론트엔드 개발자가 되고 싶습니다.

    `,
};

export const skills = {
    subject: 'Skills',
    contents: [
        {
            category: 'Frontend',
            // desc: [
            //     { name: 'React', proficiency: 25 },
            //     { name: 'HTML', proficiency: 50 },
            //     { name: 'CSS', proficiency: 45 },
            //     { name: 'JavaScript', proficiency: 30 },

            // ],
            // desc: '안녕하세요',
            names: ['HTML5, CSS3, JavaScript, TypeScript, React, React Query, styled-components'],
        },
        // {
        //     category: 'Backend',
        //     desc: [
        //         { name: 'Nodejs', proficiency: 20 },
        //         { name: 'PHP', proficiency: 40 },
        //         { name: 'C++', proficiency: 45 },
        //         { name: 'JAVA', proficiency: 30 },
        //         { name: 'Python', proficiency: 50 },
        //     ],
        // },
        // {
        //     category: 'DevOps',
        //     desc: [{ name: 'MySQL', proficiency: 40 }],
        // },
    ],
};

// export const experience = {
//     subject: 'Experience',
//     contents: [
//         {
//             title: '~ 근무',
//             subtitle: '~ 프로젝트 참여',
//             period: '2021.01 ~ 2021.12',
//             link: '',
//             desc: [
//                 { main: '~ 사내 프로젝트 참여', sub: ['~ 라이브러리 사용', '~ 백엔드 개발자로 참여'] },
//                 { main: '~ 사내 프로젝트 참여', sub: [] },
//             ],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//         {
//             title: '~ 근무',
//             subtitle: '',
//             period: '',
//             link: '',
//             desc: [],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//     ],
// };

export const projects = {
    subject: 'Projects',
    contents: [
        {
            title: 'MovieApp',
            subtitle: 'TMDB API를 사용하여 영화 정보 사이트 배포',
            period: '2023.08 ~ ing',
            link: 'https://github.com/rlawogns123/MovieApp',
            demo: 'https://rlawogns-movieapp.netlify.app/',
            desc: [
                { main: 'React Query를 사용해 API 통신 ', sub: [] },
                { main: 'Axios를 사용해 API 모듈화 ', sub: [] },
                { main: 'React Query의 useInfiniteQuery훅을 이용하여 Infinite Scroll 구현', sub: [] },
                { main: 'window 객체를 이용하여 스크롤 업 버튼 구현', sub: [] },
                { main: 'styled-components를 사용해 스타일링', sub: [] },
                { main: 'Netlify를 사용해 웹 사이트 배포', sub: [] },
            ],
            keywords: ['Vite', 'React', 'TypeScript', 'React Query', 'Axios', 'styled-components', 'Netlify'],
            folder: 'simple-react-resume-template',
            images: ['MovieApp-1.gif', 'MovieApp-2.gif', 'MovieApp-3.gif'],
            pdfs: [],
        },
        {
            title: '',
            subtitle: '',
            period: '',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: 'MyCom-Market',
            subtitle: 'CRUD 기능 구현 및 배포',
            period: '2022.09 ~ 2022.09',
            link: 'https://github.com/rlawogns123/MyCom-Market',
            desc: [
                { main: 'Firebase를 사용해 회원가입 / 로그인 기능 구현 ', sub: [] },
                { main: 'Redux Toolkit을 사용해 사용자 정보를 전역 상태로 관리 ', sub: [] },
                { main: 'Express로 웹 서버를 구축하고 MongoDB에 데이터를 저장', sub: [] },
                { main: '네이버 클라우드를 사용해 이미지 업로드', sub: [] },
                { main: 'React-Bootstrap과 styled-components를 사용해 스타일링', sub: [] },
                { main: 'Heroku를 사용해 웹 사이트 배포', sub: [] },
            ],
            keywords: [
                'React',
                'Axios',
                'Firebase',
                'Express',
                'MongoDB',
                'Redux Toolkit',
                'styled-components',
                'Heroku',
            ],
            folder: 'simple-react-resume-template',
            images: [
                'MyCom-Market-1.gif',
                'MyCom-Market-2.gif',
                'MyCom-Market-3.gif',
                'MyCom-Market-4.gif',
                'MyCom-Market-5.gif',
            ],
            pdfs: [],
        },
        {
            title: '',
            subtitle: '',
            period: '',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

// export const awards = {
//     subject: 'Awards',
//     contents: [
//         {
//             title: '대상',
//             subtitle: '~ 프로젝트',
//             period: '2021.01.01',
//             link: '',
//             desc: [{ main: '~ 프로젝트로 입상', sub: ['~ 라이브러리 사용'] }],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//         {
//             title: '',
//             subtitle: '',
//             period: '',
//             link: '',
//             desc: [],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//     ],
// };

// export const research = {
//     subject: 'Research',
//     contents: [
//         {
//             title: '~ Journal',
//             subtitle: '~ 연구',
//             period: '2021.01.01',
//             link: '',
//             desc: [{ main: '~ 에 관한 연구', sub: [] }],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//         {
//             title: '',
//             subtitle: '',
//             period: '',
//             link: '',
//             desc: [],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//     ],
// };

export const education = {
    subject: 'Education',
    contents: [
        {
            title: '원티드 프리온보딩 프론트엔드',
            subtitle:
                '주니어 채용을 목적으로 하는 다수의 참가 기업에서 제공하는 실전 기술 과제로 구성된 코스를 수료. 케이스 스터디와 동료 학습을 통해 현업에서 요구하는 기술 역량과 소프트 스킬 역량을 함께 훈련.',
            period: '2022.09 ~ 2022.10',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '블록체인 개발자 양성과정',
            subtitle: '부산대학교 산학협력단 ',
            period: '2020.06 ~ 2020.12',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '동의대학교 졸업',
            subtitle: '게임공학과',
            period: '2014.03 ~ 2020.08',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
        {
            title: '부산남일고등학교 졸업',
            subtitle: '부산광역시 수영구 망미동',
            period: '2011.03 ~ 2014.02',
            link: '',
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            pdfs: [],
        },
    ],
};

// export const certificate = {
//     subject: 'Certificate',
//     contents: [
//         {
//             title: '정보처리기사',
//             subtitle: '한국산업인력공단',
//             period: '2021.01.01',
//             link: '',
//             desc: [],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//         {
//             title: '',
//             subtitle: '',
//             period: '',
//             link: '',
//             desc: [],
//             keywords: [],
//             folder: '',
//             images: [],
//             pdfs: [],
//         },
//     ],
// };

export const footer = { updated: '2023. 09. 12.' };

// export const main = [experience, projects, awards, research, education, certificate];
export const main = [projects, education];
