const localhost = "http://localhost:8080/";

const METHOD = {
  PUT(data) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  DELETE() {
    return {
      method: "DELETE",
    };
  },
  POST(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
};

const subwayApi = (() => {
  const request = (uri, config) => fetch(localhost + uri, config);
  const requestWithJsonData = (uri, config) =>
    fetch(localhost + uri, config).then((data) => data.json());

  const station = {
    get(id) {
      return requestWithJsonData(`/stations/${id}`);
    },
    getAll() {
      return requestWithJsonData(`/stations`);
    },
    create(data) {
      return requestWithJsonData(`/stations`, METHOD.POST(data));
    },
    update(data, id) {
      return requestWithJsonData(`/stations/${id}`, METHOD.PUT(data));
    },
    delete(id) {
      return request(`/stations/${id}`, METHOD.DELETE());
    },
  };

  const line = {
    get(id) {
      return requestWithJsonData(`/lines/${id}`);
    },
    getAll() {
      return requestWithJsonData(`/lines`);
    },
    getAllDetail() {
      return requestWithJsonData(`/lines/detail`);
    },
    addEdge(lineId, edgeCreateRequestView) {
      return request(
        `/lines/${lineId}/stations`,
        METHOD.POST(edgeCreateRequestView),
      );
    },
    create(data) {
      return requestWithJsonData(`/lines`, METHOD.POST(data));
    },
    update(id, data) {
      return request(`/lines/${id}`, METHOD.PUT(data));
    },
    deleteEdge(lineId, stationId) {
      return request(`/lines/${lineId}/stations/${stationId}`, METHOD.DELETE());
    },
    delete(id) {
      return request(`/lines/${id}`, METHOD.DELETE());
    },
  };

  return {
    station,
    line,
  };
})();

export default subwayApi;
