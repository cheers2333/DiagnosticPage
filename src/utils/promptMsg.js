const promptMessage = {
    //提示展示时长
    hint_time: {
        default_time: 1.5,
        success_time: 1.5,
        error_time: 2
    },
    //系统提示消息
    common: {
        'default_error' : "系统错误，请联系管理员！",
        'insert_success' : '添加成功！',
        'insert_error' : '添加失败！',
        'save_success' : '保存成功！',
        'save_error' : '保存失败！',
        'submit_success' : '提交成功！',
        'submit_error' : '提交失败！',
        'modify_success' : '修改成功！',
        'modify_error' : '修改失败！',
        'delete_success' : '删除成功！',
        'delete_error' : '删除失败！',
        'is_no_delete' : '此状态不能删除！',
        'upload_success' : "上传成功！",
        'upload_error' : "上传失败！",
        'move_success' : "移动成功！",
        'move_error' : "移动失败！",
        'start_success' : "启动成功！",
        'forbidden_success' : "禁用成功！",
        'back_success' : '打回成功！',
        'handOut_success' : '分发成功！',
        'copy_success' : '复制成功！',
        'must_single_data' : "请选择单条数据！",
        'must_specific_data' : "请选择具体数据！",
        'is_delete_tree_node' : "您确定要删除这个节点吗?",
        'is_delete_table_node' : "删除选中的数据，是否继续？",
        'is_approval_pass' : "审批通过，是否继续？",
        'is_hand_out' : "分发选中的数据，是否继续？",
        'is_save' : "保存数据，是否继续？",
        'is_repeat' : "请勿选择重复数据！",
        'is_start' : "是否启动？",
        'is_forbidden' : "是否禁用？",
        'not_allowed_delete' : "已生效不允许删除！",
        'not_allowed_modify' : "已生效不允许修改！",
        'not_allowed_start' : "已生效不允许启动！",
        'not_allowed_leaf' : "请选择叶子节点！",
        'not_allowed_status_save' : "此状态不允许保存！",
        'not_allowed_status_submit' : "此状态不允许提交！",
        'not_allowed_status_modify' : "此状态不允许修改！",
        'not_allowed_status_delete' : "此状态不允许删除！",
        'not_status_start' : "此状态不允许启动！",
        'not_status_moveUp' : "此状态不允许上移！",
        'not_status_moveDown' : "此状态不允许下移！",
        'approvalAgree_success' : "审批成功！",
        'approvalBack_success' : "退回成功！",
        'check_pass' : "校验通过！",
        'isEmpty_quotaWeight' : "权重不能为空！",
        'isOver_quotaWeight' : "权重不能大于100！",
        'change_skin_success' : "更换皮肤成功！",
        'change_skin_error' : "更换皮肤失败！",
        'read_Message_success' : "标记已读成功！",
        'read_Message_error' : "标记已读失败！",
        'login_Message_error' : "用户名/密码输入错误",
        // 'username_Message_error' : "用户名输入错误",
    },
    //组织绩效-绩效准备-指标库
    quotaindex: {
        'quota_tree_add_no' : '禁止新增节点！',
        'quota_tree_add_must' : '请选择一个节点！',
        'quota_tree_modify_no_first' : '请选择第二级或第三级节点！',
        'quota_tree_select_forth' : '请选择第四级节点！',
        'quota_tree_delete' : '删除选中的指标库并删除相关的指标，是否继续？',
        'quota_tree_choose_last' : '请选择指标小类',
        'quota_last_tree_no_add' : '指标小类不允许添加节点',
        'quota_big_or_small_class' : '请选择指标大类或指标小类',
        'choose_big_or_small_delete' : '请选择指标大类或指标小类进行删除',
    },
    //组织绩效-绩效准备-考评关系-考评组
    groupindex: {
        'group_must_position' : '请选择工作岗位！',
        'group_must_posiPeople' : '请选择工作岗位人员！',
    },
    //组织绩效-绩效准备-考评关系-考评关系
    relationIndex: {
        'rela_must_object' : '请选择考评对象！',
    },
    //组织绩效-绩效方案-订单审批
    order: {
        'not_empty_quota' : '考核指标不能为空！',
        'not_empty_calc' : '计算公式不能为空！',
        'not_empty_Check' : '校验公式不能为空！',
        'sure_Back_order' : '确定打回当前选中的订单？',
        'Back_success' : '打回成功！',
    },
    //组织绩效-绩效方案-方案生成
    schemeCreate: {
        'sure_plan_confirm' : '是否确认当前选中的订单？',
        'plan_confirm_success' : '确认成功！',
    },
    //绩效评分
    schemeScore: {
        'score_calc_success' : '得分计算成功！',
        'bonus_calc_success' : '奖金计算成功！',
        'not_allowed_status_bonusCalc' : '此状态不允许奖金计算！',
        'not_allowed_status_scoreCalc' : '此状态不允许得分计算！',
    },
    //系统设置-配置管理-数据字典
    dict: {
        'is_delete_tree_node' : '删除此字典分类将删除所有子分类和数据字典，是否继续？',
        'is_delete_selected_data' : '删除选中的数据，是否继续？',
    },
    //系统设置-配置管理-菜单管理
    menu: {
        'is_delete_menu_node' : '删除此菜单将删除所有子菜单和操作项，是否继续？',
        'is_delete_selected_data' : '删除选中的数据，是否继续？',
    },
    //专项奖管理
    bonusTransfer: {
        'is_distribute_success' : '分发成功！',
        'is_distribute_no_status' : '请选择待分发的汇总表！',
    },
    schemeFeedback: {
        'is_already_have_feedback' : '这条数据已有反馈！',
        'no_already_have_feedback' : '这条数据无反馈！',
        'no_already_have_feedback_add' : '这条数据无反馈，请添加！',
        'complete_underway_no_modify' : '不能修改状态为审批中或审批完成的反馈！',
        'is_delete_feedback' : '是否删除这条数据的方案反馈！',
    },
    specialBonus: {
        'is_sure_specialBonus' : '不能修改状态为审批中或审批完成的专项奖申请！',
        'is_delete' : '此状态不能删除！',
        'is_sure_confirm' : '您确定要提交吗?',
    },
    specialBonusPass: {
        'is_sure_specialBonusPass' : '是否同意这条专项奖审批？',
    },
    bonusTransfPass: {
        'is_sure_bonusTransfPass' : '是否同意这条奖金转移审批？',
    },
    scheme: {
        'is_sure_start' : '您确定要启动吗?',
        'not_allowed_startFormula' : "已生效或制定中不允许启动！",
    },
    orderTarget: {
        'is_target_SpecifyTpl_success' : '配置通用模版成功！',
        'status_no_send' : '请选择状态为编辑的目标制定进行员工确认！',
        'status_no_confirm' : '请选择状态为已反馈的目标制定进行确认！',
        'is_send_staffer_confirm' : '是否发送员工确认？',
        'is_send_success' : '发送成功！',
        'is_sure_confirm' : '是否确认当前选中目标制定？',
        'is_sure_success' : '发送成功！',
        'status_no_revise' : '请选择状态为已生效的目标制定进行修订！',
        'is_sure_Revise' : '是否要修订选中的目标？',
        'is_Revise_success' : '目标修订成功！',
    },
    advice: {
        'first_save_after_commit' : '请先保存再进行提交！',
    },
    assessScore:{
        'must_assessScore_people' : '请选择考核人员！',
        'superior_Eval_success' : '直接上级评价成功！',
    },
    assessStart: {
        'status_no_start' : '当前状态禁止启动',
    },
    selfEval: {
        'is_sure_commit' : '是否提交完成情况自评？',
    },
    transmit: {
        'choose_orderLevel' : '请选择下达级别！',
    },
    approve:{
        'sure_Back' : '确定打回当前选中的审批？',
        'sure_agree' : '确定同意当前选中的审批？',
        'sure_release_assess' : '确定发布考核结果？',
        'release_assess_success' : '发布成功！',
        'status_no_release' : '请选择状态为同意的考核结果发布！',
    },
    keyEvent:{
        'is_sure_commit' : '是否提交当前选中的关键事件？',
    },
    grade:{
        'is_write_grade' : '请填写考核等级！',
        'grade_wrong' : '请填写正确的考核等级（考核等级分为：A、B、C三个等级）！',
        'property_must_c' : '关键事件记录属性为否决项，系统默认考核等级为C，禁止修改考核等级！',
        'lastScore_less_ninety' : '最终得分小于90分考核等级禁止评A！',
    },
    assessOrg:{
        'assessOrg_tree_noAdd_obj' : '禁止新增考核机构！',
        'must_assessOrg_tree' : '请选择考核机构！',
        'no_lack_competence_modify' : '无权限修改！',
        'no_lack_competence_delete' : '无权限删除！',
    },
    template:{
        'no_lack_competence_modify' : '无权限修改！',
        'no_lack_competence_delete' : '无权限删除！',
    },
    assessResult:{
        'aeeseeResult_eavl_success' : '提交改进措施成功！',
    },
}
export default promptMessage