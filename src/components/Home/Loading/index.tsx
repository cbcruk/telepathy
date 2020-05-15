import Lottie from 'react-lottie'
import animationData from './data.json'

const Loading: React.FC = () => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    style={{
      pointerEvents: 'none',
    }}
  />
)

export default Loading
