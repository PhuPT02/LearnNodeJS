const _COMMOM_LIMIT_PAGE = 50;

const startPage  = (numberPage)=>{
    return (_COMMOM_LIMIT_PAGE * numberPage) - _COMMOM_LIMIT_PAGE 
};

module.exports = { startPage, endPage : _COMMOM_LIMIT_PAGE  };