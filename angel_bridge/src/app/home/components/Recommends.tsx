import * as style from '@/app/home/styles/Recommends.css';

import Image from 'next/image';
import Thumbnail from '@/app/home/assets/Program_thumbnail.jpg';

export default function Recommends() {
    return (
        <div className={style.recommends}>
            <div className={style.titleWrapper}>
                <div className={style.title}>추천 프로그램</div>
                <div className={style.seeAll}>전체보기</div>
            </div>
            <div className={style.contentsWrapper}>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <div className={style.activeBadge}>모집중</div>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                        />
                    </div>
                    <div className={style.contentText}>
                        <div className={style.contentTitle}>예비창업패키지 2주 완성</div>
                        <div className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</div>
                    </div>
                </div>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <div className={style.inactiveBadge}>모집예정</div>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                            />
                    </div>
                    <div className={style.contentText}>
                        <div className={style.contentTitle}>예비창업패키지 2주 완성</div>
                        <div className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</div>
                    </div>
                </div>
                <div className={style.contents}>
                    <div className={style.contentImage}>
                        <div className={style.inactiveBadge}>모집예정</div>
                        <Image
                                src={Thumbnail}
                                alt="Program Thumbnail"
                                width={330}
                                height={180}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                            />
                    </div>
                    <div className={style.contentText}>
                        <div className={style.contentTitle}>예비창업패키지 2주 완성</div>
                        <div className={style.contentBio}>프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}