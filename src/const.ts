export const bgColor = `#666b89`;

export const tldr = `UniMotion povides a unified framework for instance motion trajectory estimation!`;

export const video1 = "/wild1.mp4"
export const video2 = "/wild2.mp4"
export const video3 = "/wild3.mp4"
export const video4 = "/wild4.mp4"
export const video5 = "/wild5.mp4"
export const video6 = "/wild6.mp4"

export const jointvideo1 = "/joint1.mp4"
export const jointvideo2 = "/joint2.mp4"
export const jointvideo3 = "/joint3.mp4"
export const jointvideo4 = "/joint4.mp4"
export const jointvideo5 = "/joint5.mp4"
export const jointvideo6 = "/joint6.mp4"
export const jointvideo7 = "/joint7.mp4"
export const jointvideo8 = "/joint8.mp4"

export const workflow = "/workflow.png"

export const abstract = `Estimating motion trajectories over video frames is an essential aspect of understanding video content. However, conventional approaches for motion estimation such as video point tracking and video instance segmentation, often fall short in accurately representing the trajectories of multiple points of a target instance. To bridge this gap, we introduce a novel approach: Unified Motion Estimation (UniMotion). UniMotion is specifically designed to tackle each challenge of video segmentation and point tracking concurrently, offering a more holistic approach to estimating motion trajectories in intricate video scenes. Our key discovery is that both tracking and segmentation can significantly enhance each other through their synergistic effects within the framework. For example, segmentation can guide better tracking by offering semantically related points in the queried frame, and conversely, tracking can guide the precise instance location to segmentation foundation models (e.g., segment anything) to enable video instance segmentation in a unified framework. Throughout extensive experiments, we demonstrate the efficacy of UniMotion in improving motion estimation performances in terms of the existing video segmentation and point tracking benchmarks. For example, on the recent TAP-Vid benchmark, our framework consistently improves the tracking performance, e.g., 13.6% improvement on the standard Jaccard metric. Furthermore, we found our point tracking results can lead to enhanced zero-shot video instance segmentation results, with up to 14.7% improvement compared to baselines on the intersection score.`;


export const approach = `UniMotion provides a unified approach to both video segmentation and point tracking tasks. Our key idea is that the estimated outputs of both tasks can complement each other and lead to synergistic effects for an enhanced understanding of motion trajectories. Somewhat surprisingly, we find that within UniMotion framework, the performance of segmentation and tracking can be significantly improved compared to when each is performed alone. Specifically, we focus on the scenario of tracking motion trajectories of multiple queried points in the same instance (i.e., instance motion trajectories). To this end, we first perform point tracking for a set of queried points, and then identify an instance mask over the trajectories using the recent segmentation foundation models like segment anything models (SAM). Finally, we aggregate these instance masks over the trajectories by referring to the confidence derived from the occlusion predictions of the point tracking models. As a result, we can also obtain the entire instance mask by approximately removing less confident masks.`; 