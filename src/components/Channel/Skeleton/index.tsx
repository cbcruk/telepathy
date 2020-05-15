import ContentLoader from 'react-content-loader'
import styles from './style.module.css'

const Skeleton: React.FC = () => (
  <div className={styles.wrapper}>
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      backgroundColor="#e0e0e0"
      foregroundColor="#ffffff1f"
    >
      <rect x="0" y="0" rx="3" ry="3" width="120" height="24" />
      <rect x="0" y="34" rx="3" ry="3" width="65" height="20" />
      <circle cx="385" cy="15" r="15" />
    </ContentLoader>
  </div>
)

export default Skeleton
