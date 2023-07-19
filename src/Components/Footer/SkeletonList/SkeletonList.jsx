import s from './SkeletonList.module.scss';
import Skeleton from "../../Skeleton/Skeleton";

export const SkeletonList = () => {
  return (
    <div className={s.skeleton}>
      {[6, 4, 2].map(gendetItem =>
        <div key={`gendet-${gendetItem}`} className={s.skeletonSublist}>
          <Skeleton className={s.skeletonSubtitle}></Skeleton>
          {new Array(gendetItem).fill(null).map((item, i) => <Skeleton key={`item-${gendetItem}-${i}`} className={s.skeletonItem} />)}
        </div>
      )}
    </div>
  )
}
