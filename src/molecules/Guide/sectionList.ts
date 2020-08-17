import {FireIcon, HistoryIcon, HomeIcon, StoreIcon, SubscribesIcon, YoutubeIcon} from "../../atoms/Icon";

const sectionList = [
  {
    title: '',
    items: [{
      link: "/",
      icon: HomeIcon,
      title: '홈'
    }, {
      link: "/",
      icon: FireIcon,
      title: '인기'
    }, {
      link: "/",
      icon: SubscribesIcon,
      title: "구독"
    }, {
      link: "/",
      icon: YoutubeIcon,
      title: "Originals"
    }]
  },
  {
    title: '',
    items: [{
      link: "/",
      icon: StoreIcon,
      title: "보관함"
    }, {
      link: "/",
      icon: HistoryIcon,
      title: "시청 기록"
    }]
  },
  {
    title: '구독',
    items: []
  },
  {
    title: 'youtube 더보기',
    items: []
  }
];

export default sectionList;