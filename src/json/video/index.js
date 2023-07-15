export const VideoJson = {
  dataSource: [
    {
      id: "1",
      title: "Introduction Video",
      description: "this is a react project",
      course: "React JS",
      auther: "Varun Nayak",
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      title: "First class",
      description: "this is a react project",
      course: "React JS",
      auther: "Varun Nayak",
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      title: "Second lecture",
      description: "this is a react project",
      course: "React JS",
      auther: "Varun Nayak",
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "4",
      title: "Third Lecture ",
      description: "this is a react project",
      course: "React JS",
      auther: "Varun Nayak",
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "5",
      title: "Fourth Lecture",
      description: "This is a react project",
      course: "React JS",
      auther: "Varun Nayak",
      thumbnail:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ],

  columns: [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      width: 350,
      ellipsis: true,
      render: (data) => <a href={`${data}`}>{data}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Auther",
      dataIndex: "auther",
      key: "auther",
    },
  ],
};
