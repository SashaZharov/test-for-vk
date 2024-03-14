import { FC } from "react";
import { Text, CardGrid, Card } from "@vkontakte/vkui";
import "./styles.css";

type UserAgeCardProps = { userAge: string };

export const UserAgeCard: FC<UserAgeCardProps> = ({ userAge }) => {
  return (
    <CardGrid size="l">
      <Card mode="shadow">
        <div className="user-age-value">
          {userAge ? (
            <Text weight="2" className="user-age-text">
              {userAge} лет
            </Text>
          ) : (
            <></>
          )}
        </div>
      </Card>
    </CardGrid>
  );
};
