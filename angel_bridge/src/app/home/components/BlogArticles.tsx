import * as style from '@/app/home/styles/BlogArticles.css';

import Image from 'next/image';
import ProfileImage from '@/app/home/assets/ProfileImage.jpg';

export default function BlogArticles() {
    return (
        <div className={style.articles}>
            <div className={style.titleWrapper}>
                <p className={style.title}>NEW! 블로그 아티클</p>
                <p className={style.seeAll}>전체보기</p>
            </div>
            <div className={style.contentsWrapper}>
                <div className={style.contents}>
                    <div className={style.textWrapper}>
                        <p className={style.contentTitle}>
                        [안 읽으면 손해!] 2025 스타트업 지원 사업 총정리
                        </p>
                        <p className={style.contentText}>
                        블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 
                        </p>
                    </div>
                    <div className={style.writerWrapper}>
                        <Image
                            src={ProfileImage}
                            alt="ProfileImage"
                            width={24}
                            height={24}
                            style={{
                                objectFit: 'cover',
                                borderRadius: '1.5rem',
                            }}
                            />
                        <p className={style.writer}>엔젤브릿지</p>
                        <p className={style.writtenDate}>2024. 12. 16</p>
                    </div>
                </div>
                <div className={style.contents}>
                    <div className={style.textWrapper}>
                        <p className={style.contentTitle}>
                        [안 읽으면 손해!] 2025 스타트업 지원 사업 총정리
                        </p>
                        <p className={style.contentText}>
                        블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 
                        </p>
                    </div>
                    <div className={style.writerWrapper}>
                        <Image
                            src={ProfileImage}
                            alt="ProfileImage"
                            width={24}
                            height={24}
                            style={{
                                objectFit: 'cover',
                                borderRadius: '1.5rem',
                            }}
                            />
                        <p className={style.writer}>엔젤브릿지</p>
                        <p className={style.writtenDate}>2024. 12. 16</p>
                    </div>
                </div>
            </div>
        </div>
    );
}