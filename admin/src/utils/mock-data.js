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
    start_time: "06:00:00",
    end_time: "23:00:00",
    interval_time: 10,
    stations: [MOCK_STATIONS[0], MOCK_STATIONS[1], MOCK_STATIONS[2]],
  },
  {
    id: 2,
    name: "2호선",
    bgColor: "bg-green-500",
    start_time: "06:00:00",
    end_time: "23:00:00",
    interval_time: 10,
    stations: [
      MOCK_STATIONS[3],
      MOCK_STATIONS[4],
      MOCK_STATIONS[5],
      MOCK_STATIONS[6],
      MOCK_STATIONS[7],
    ],
  },
  {
    id: 3,
    name: "3호선",
    bgColor: "bg-orange-500",
    start_time: "06:00:00",
    end_time: "23:00:00",
    interval_time: 10,
  },
];

export { MOCK_STATIONS, MOCK_LINES };
