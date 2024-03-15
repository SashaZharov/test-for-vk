import { FC } from "react";
import { Text, CardGrid, Card } from "@vkontakte/vkui";
import "./UserAgeCard.css";
import { ageToString } from "../../lib/ageToString";

type UserAgeCardProps = { userAge: string };

export const UserAgeCard: FC<UserAgeCardProps> = ({ userAge }) => {
  return (
    <CardGrid size="l">
      <Card mode="shadow">
        <div className="UserAge__cardDiv">
          {userAge ? (
            <Text weight="2" className="UserAge__cardText">
              {userAge} {ageToString(userAge)}
            </Text>
          ) : (
            <></>
          )}
        </div>
      </Card>
    </CardGrid>
  );
};
