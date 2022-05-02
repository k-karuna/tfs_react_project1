import Timeline from "../components/Timeline/Timeline";
import { connect } from "react-redux";
import { getOperations } from "../services/requestMock";
import { useEffect } from "react";
import {
  loadOperations,
  loadOperationsFailure,
  loadOperationsSuccess,
} from "../redux/operations/actions";
import { useParams } from "react-router-dom";

const TimelinePage: React.FC<any> = (props) => {
  let params = useParams();
  const { operations } = props;

  useEffect(() => {
    props.loadOperations();
    getOperations(params.accountId)
      .then((operations) => props.loadOperationsSuccess(operations))
      .catch(() => props.loadOperationsFailure());
  }, [params.accountId]);

  if (!operations) {
    return <h2>Подождите, идет загрузка</h2>;
  }
  return operations.length > 0 ? (
    <div>
      <h2>Список операций</h2>
      <Timeline items={operations} />
    </div>
  ) : (
    <h2>По данному аккаунту нет операций</h2>
  );
};

const mapStateToProps = (state) => ({
  operations: state.operations,
});

const mapDispatchToProps = {
  loadOperations,
  loadOperationsFailure,
  loadOperationsSuccess,
};

export { TimelinePage };
export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);
