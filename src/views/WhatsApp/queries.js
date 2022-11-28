import socket from "../../utils/ws/websocket.config";

import { useNavigate } from "react-router-dom";
import { useHttp } from "../../utils/hooks/useHttp";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useSessions = () => {
  const request = useHttp();

  const query = useQuery({
    queryKey: ["sessions"],
    queryFn: () => request({
      url: "/sessions", method: "GET"
    })
  });

  return query;
}

export const useCreateSession = () => {
  const request = useHttp();
  const navigate = useNavigate();
  const queryClient = new useQueryClient();

  const createSessionMutation = useMutation({
    mutationFn: data => request({ url: "/sessions", method: "POST", data }),
    onSuccess: res => {
      const sessions = queryClient.getQueryData(["sessions"]);
      queryClient.setQueryData(["sessions"], { data: [...sessions.data, res.data] });
      navigate("/whatsapp/" + res.data.id);
      socket.emit("create-session", res.data);
    }
  });

  return createSessionMutation;
}