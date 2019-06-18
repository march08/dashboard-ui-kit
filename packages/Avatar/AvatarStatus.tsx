import * as React from "react";
import cls from "./styles.scss";

export type AvatarStatusProps = {
  status: React.ReactNode;
};

export const AvatarStatus = ({ status }: AvatarStatusProps) => (
  <div className={cls.statusWrapper}>
    {status === "uik_online" ? (
      <div className={cls.statusOnline} />
    ) : (
      <span>{status}</span>
    )}
  </div>
);

AvatarStatus.displayName = "AvatarStatus";

export default AvatarStatus;
