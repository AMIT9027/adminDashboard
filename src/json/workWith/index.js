export const clientJson = {
  dataSource: [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial1",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial2",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial3",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial4",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial5",
    },
    {
      id: 6,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial6",
    },
    {
      id: 7,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial7",
    },
    {
      id: 8,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial8",
    },
    {
      id: 9,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial9",
    },
    {
      id: 10,
      image:
        "https://th.bing.com/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?w=294&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      url: "https://example.com/testimonial10",
    },
  ],

  columns: [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (item, data) => <img height={80} src={item} alt={data?.image} />,
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
  ],
};
