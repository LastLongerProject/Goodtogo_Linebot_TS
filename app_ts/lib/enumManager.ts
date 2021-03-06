const enum RegisterState {
    YES = "Wanna become our member",
    NO = "Don't wanna become our member"
}

const enum BindState {
    SUCCESS = "Successfullt bound with line",
    PHONE_HAS_BOUND = "The phone has already bound with another line account",
    LINE_HAS_BOUND = "Line has bound with another phone",
    IS_NOT_PHONE = "The input is not phone number"
}

const enum DeleteBindState {
    SUCCESS = "Unbind successfully",
    LINE_HAS_NOT_BOUND = "Line has not bound with any phone number"
}

const enum GetContributeState {
    SUCCESS = "Get contribution successfully"
}

const enum AddVerificationSignalState {
    SUCCESS = "Successfully add verification signal"
}

const enum QrcodeState {
    SUCCESS = 'Get contribution successfully'
}

const enum DatabaseState {
    USER_NOT_FOUND = 'Does not find user in database',
    HAS_NOT_SIGNALED = 'The user has not been signaled in redis'
}


const enum DataType {
    RECORD = "record",
    IN_USED = "in used",
    GET_MORE_RECORD = "get more record from database",
    GET_MORE_INUSED = "get more in used container from database"
}

const enum RewardType {
    LOTTERY = "lottery",
    REDEEM = "redeem"
}

const enum RichmenuType {
    BEFORE = "before binding",
    _0 = "using amount 0",
    _1 = "using amount 1",
    _2 = "using amount 2",
    _3 = "using amount 3",
    _4 = "using amount 4",
    _5 = "using amount 5",
    MORE = "using lots of"

}

const enum GetUserDetail {
    SUCCESS = "Get user detail success",
    FAIL = "Get user detail failed"
}

export {
    RegisterState, BindState, DeleteBindState, GetContributeState, QrcodeState, DatabaseState
    , DataType, RewardType, AddVerificationSignalState, RichmenuType, GetUserDetail
}

