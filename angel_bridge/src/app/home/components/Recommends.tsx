import * as style from '@/app/home/styles/Recommends.css';
import ProgramCard from '@/components/common/ProgramCard';

const programsDummyData = [
    {
        badgeText: '모집중',
        badgeType: 'active',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
    {
        badgeText: '모집예정',
        badgeType: 'inactive',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
    {
        badgeText: '모집예정',
        badgeType: 'inactive',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
];

export default function Recommends() {
    return (
        <div className={style.recommends}>
            <div className={style.titleWrapper}>
                <p className={style.title}>추천 프로그램</p>
                <p className={style.seeAll}>전체보기</p>
            </div>
            <div className={style.contentsWrapper}>
                {programsDummyData.map((program, index) => (
                    <ProgramCard
                        key={index}
                        badgeText={program.badgeText}
                        badgeType={program.badgeType}
                        title={program.title}
                        bio={program.bio}
                    />
                ))}
            </div>
        </div>
    );
}