const MOCK_STATIONS = [
  {
    id: 1,
    name: "수원",
  },
  {
    id: 2,
    name: "화서",
  },
  {
    id: 3,
    name: "성균관대",
  },
  {
    id: 4,
    name: "교대",
  },
  {
    id: 5,
    name: "강남",
  },
  {
    id: 6,
    name: "역삼",
  },
  {
    id: 7,
    name: "선릉",
  },
  {
    id: 8,
    name: "삼성",
  },
];

const MOCK_LINES = [
  {
    id: 1,
    name: "1호선",
    bgColor: "bg-blue-700",
    stations: ["수원", "화서", "성균관대"],
  },
  {
    id: 2,
    name: "2호선",
    bgColor: "bg-green-500",
    stations: ["교대", "강남", "역삼", "선릉", "삼성"],
  },
  {
    id: 3,
    name: "3호선",
    bgColor: "bg-orange-500",
    stations: [],
  },
];

export { MOCK_STATIONS, MOCK_LINES };
