const change_loader = (bool) => ({ type: "LOADER", payload: bool });
const user_role = (role) => ({ type: "ROLE", payload: role });
const check_login = (check) => ({ type: "LOGIN", payload: check });

export { change_loader, user_role, check_login };
