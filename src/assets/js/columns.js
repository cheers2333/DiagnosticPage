const tableTop = {
    //症状表表头字段
    SymptomColumns: [
        {
          title: "症状编码",
          dataIndex: "code1",
          width: 70,
          align: "center"
        },
        {
          title: "症状名称",
          dataIndex: "name",
          width: 100,
          align: "center"
        },
        {
          title: "症状分布编码",
          dataIndex: "code",
          width: 80,
          align: "center"
        },
        {
          title: "症状分布名称",
          dataIndex: "names",
          width: 100,
          align: "center"
        },
        {
            title: "操作",
            dataIndex: "",
            width: 100,
            align: "center",
            scopedSlots: { customRender: 'operation' }
          },
      ],
      //症候
    ColumnsTwo: [
        {
          title: "证候编码",
          dataIndex: "code1",
          width: 70,
          align: "center"
        },
        {
          title: "证候名称",
          dataIndex: "name",
          width: 100,
          align: "center"
        },
        {
          title: "上级证候编码",
          dataIndex: "code",
          width: 80,
          align: "center"
        },
        {
          title: "证候层级",
          dataIndex: "names",
          width: 100,
          align: "center"
        },
        {
          title: "最小症状数",
          dataIndex: "small",
          width: 100,
          align: "center" 
        },
        {
            title: "操作",
            dataIndex: "",
            width: 100,
            align: "center",
            scopedSlots: { customRender: 'operation' }
          },
      ],
      //维护症状与证候关系表
    ColumnsThree: [
        {
          title: "症状编码",
          dataIndex: "code1",
          width: 70,
          align: "center"
        },
        {
          title: "症状名称",
          dataIndex: "name",
          width: 100,
          align: "center"
        },
        {
          title: "症状分布编码",
          dataIndex: "code",
          width: 80,
          align: "center"
        },
        {
          title: "症状分布名称",
          dataIndex: "names",
          width: 100,
          align: "center"
        },
        {
          title: "所属证候",
          dataIndex: "belong",
          width: 100,
          align: "center" 
        },
        {
            title: "操作",
            dataIndex: "",
            width: 100,
            align: "center",
            scopedSlots: { customRender: 'operation' }
          },
      ],
}


export { tableTop }