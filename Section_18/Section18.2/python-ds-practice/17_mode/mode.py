def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    # Count the frequencty of num
    counts = {}

    for num in nums:
        counts[num] = counts.get(num, 0) + 1

    # find the highest value (the most frequent number)

    highest_value = max(counts.values())

    # Now we need to see at which index the highest value is at

    for (num, frequency) in counts.itmes():
        if frequency == highest_value:
            return num