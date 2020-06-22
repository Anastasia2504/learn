class House {

	String address;

//	int floorsCount = 0;

	int apartamentsCount = 0;

	int count(int floorsCount) {

		System.out.println(floorsCount);

		return floorsCount;
	}

	int countAparts(int floorsCount, int apartamentsOnFloor) {
		apartamentsCount =  floorsCount * apartamentsOnFloor;
		return apartamentsCount;
	}

}