package org.example;

import java.util.List;

public class GetApiResponse {
    private String message;
    private boolean success;
    private List<User> users;


    public GetApiResponse(String message, boolean success) {
        this.message = message;
        this.success = success;
    }

    public GetApiResponse(String message, boolean success, List<User> users) {
        this.message = message;
        this.success = success;
        this.users = users;
    }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }


}
