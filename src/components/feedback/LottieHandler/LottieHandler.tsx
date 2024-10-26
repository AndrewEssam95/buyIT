import Lottie from "lottie-react";
import notFound from "../../../../public/assets/lottie/notFound.json";
import error from "../../../../public/assets/lottie/error.json";
import loading from "../../../../public/assets/lottie/loading.json";
import empty from "../../../../public/assets/lottie/empty.json";
import success from "../../../../public/assets/lottie/success.json";
import about from "../../../../public/assets/lottie/about.json";

const lottieTypes = {
  notFound,
  error,
  empty,
  loading,
  success,
  about,
};

type TLottieProps = {
  type: keyof typeof lottieTypes;
  message?: string;
};

const LottieHandler = ({ type, message }: TLottieProps) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-0">
      <Lottie animationData={lottieTypes[type]} style={{ width: 400 }} />
      {message && <h3>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
