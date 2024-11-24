
const Notifications = () => {
  return (
    <div className="max-w-full rounded-lg border border-gray-200 bg-white shadow mx-auto">
      <div className="p-4">
        <div className="flex items-center justify-between pb-4">
          <span className="text-sm font-medium">
            You have 5 unread messages
          </span>
          <button className="ml-auto rounded border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
            Mark all as read
          </button>
        </div>
        <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-zinc-700 scrollbar-thumb-zinc-500">
          <div className="space-y-4">
            <NotificationItem
              message="@User1 has uploaded his Receipt"
              time="2 min ago"
            />
              <NotificationItem
                message="Kindly provide the complete details of this property at the earliest for review purposes."
                time="2 hours ago"
                isFromDC
              />
            <NotificationItem
              message="@User2 has uploaded his Receipt"
              time="1 hour ago"
            />
            <NotificationItem
              message="@User3 has uploaded his Receipt"
              time="yesterday"
            />
            <NotificationItem
              message="All property-related documentation must be updated before the next review meeting."
              time="2 days ago"
              isFromDC
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationItem = ({ message, time, isFromDC }) => {
  return (
    <div className="flex items-start space-x-4 rounded-md p-3">
      {isFromDC ? (
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
          DC
        </div>
      ) : (
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-700 font-bold">
          U
        </div>
      )}
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{message}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default Notifications;
